

import { getServerSession } from "next-auth/next";
import { authOptions } from "../../../server/models";

import {
  User,
} from "@server/models";

async function get(req: NextApiRequest, res: NextApiResponse) {
  return res.status(200).json({ status: 'TODO: Return users?' });
}

async function post(req: NextApiRequest, res: NextApiResponse) {
  const session = await getServerSession(req, res, authOptions);
  if ( !session ) {
    return res.status(401).json({ status: 'error', error: 'User not authenticated' });
  }

  const user = await User.update({
    name: req.body.name,
    image: req.body.image,
  }, {
    where: {
      id: session.user.id
    },
  });
  return res.status(200).json(user);
}

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    return await get(req, res);
  }

  if (req.method === 'POST') {
    return await post(req, res);
  }
}