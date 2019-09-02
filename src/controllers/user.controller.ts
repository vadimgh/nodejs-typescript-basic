import faker from 'faker';
import { Request, Response, NextFunction } from 'express';

export const getUsers = (req: Request, res: Response, next: NextFunction) => {
  const users: {
    name: string;
    phone: string;
    companyName: string;
    characteristic?: string;
  }[] = [];

  for (let i=0; i < 100; i++) {
    users.push({
      name: `${faker.name.firstName()} + ${faker.name.lastName()}`,
      phone: faker.phone.phoneNumber(),
      companyName: faker.company.companyName(),
      characteristic: faker.lorem.paragraph()
    });
  }

  res.json({
    success: true,
    data: users,
    message: 'Users has been fetched!'
  })
}