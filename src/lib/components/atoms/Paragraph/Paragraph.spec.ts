import '@testing-library/jest-dom';
import { render } from '@testing-library/svelte';

import SlotTest from './SlotTest.svelte';
import Paragraph from './Paragraph.svelte';

test('it should render slotted content', () => {
  const { getByText } = render(SlotTest, {
    props: { Component: Paragraph },
  });

  expect(getByText('placeholder.content')).toBeInTheDocument();
});
