import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Link from './Link.svelte';

test('it should render slotted content', () => {
  const { getByText } = render(Link, {
    props: {
      href: 'placeholder.href',
    },
  });

  // expect(getByText('placeholder.content')).toBeInTheDocument();
});
