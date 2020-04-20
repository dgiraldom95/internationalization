import React from 'react';
import { FormattedDate, FormattedNumber, useIntl } from 'react-intl';

const Job = (props) => {
  const intl = useIntl();

  console.log(intl.locale);
  return (
    <tr>
      <th scope="row">{props.offer.id}</th>
      <td>{props.offer.name}</td>
      <td>{props.offer.company}</td>
      <td>
        <FormattedNumber localeMatcher="best fit" value={props.offer.salary} notation="compact" compactDisplay="long" />
      </td>
      <td>{props.offer.city}</td>
      <td>
        <FormattedDate value={new Date(props.offer.date)} year="numeric" month="long" day="numeric" weekday="long" />
      </td>
      <td>
        <FormattedNumber value={props.offer.views} />
      </td>
    </tr>
  );
};

export default Job;
