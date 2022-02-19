import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import Logo from './Logo.svelte';

test('it should render slotted content', () => {
  const { getByText } = render(Logo, {
    props: {
      alt: 'placeholder.alt',
      src: 'placeholder.src',
    },
  });

  // expect(getByText('placeholder.content')).toBeInTheDocument();
});
