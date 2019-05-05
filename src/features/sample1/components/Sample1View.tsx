import React from 'react';
import { Link } from 'react-navi';

export const Sample1View = () => {
  return (
    <>
      Feature sample1
      <br />
      <Link href="/sample2">Go to sample feature 2 (set &quot;slow 3G&quot; to see a spinner)</Link>
    </>
  );
};
