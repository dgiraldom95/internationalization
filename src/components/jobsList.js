import React, { useState } from 'react';
import Job from './job';
import { FormattedMessage, useIntl } from 'react-intl';

const JobsList = () => {
  const intl = useIntl();
  const [state] = useState({
    offers: [
      {
        id: '0001',
        name: 'Manager',
        company: 'Schneider Electric',
        salary: 4500000,
        views: 41302,
        city: 'Bogotá, Colombia',
        date: '2019-03-26',
      },
      {
        id: '0002',
        name: 'Software Engineer',
        company: 'Google Inc.',
        salary: 20000000,
        views: 502,
        city: 'Palo Alto, CA, USA',
        date: '2019-03-27',
      },
      {
        id: '0003',
        name: 'Nurse',
        company: 'Clínica La Aurora',
        salary: 1000000,
        views: 4303,
        city: 'Cali, Colombia',
        date: '2019-03-28',
      },
    ],
  });

  console.log(intl.locale);
  return (
    <div>
      <table className="table">
        <thead className={intl.locale === 'en-US' ? 'thead-dark' : 'thead-light'}>
          <tr>
            <th scope="col">#</th>
            <th scope="col">
              <FormattedMessage id="Position" />
            </th>
            <th scope="col">
              <FormattedMessage id="Company" />
            </th>
            <th scope="col">
              <FormattedMessage id="Salary" />
            </th>
            <th scope="col">
              <FormattedMessage id="City" />
            </th>
            <th scope="col">
              <FormattedMessage id="PublicationDate" />
            </th>
            <th scope="col">
              <FormattedMessage id="Views" />
            </th>
          </tr>
        </thead>
        <tbody>
          {state.offers.map((e, i) => (
            <Job key={i} offer={e} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default JobsList;
