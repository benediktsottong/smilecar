import { render } from '@testing-library/react';

import { Body } from './Body';

jest.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string, fallback: string) => fallback,
    i18n: {
      changeLanguage: jest.fn(),
    },
  }),
}));

describe('Test <Body />', () => {
  it('should render an html markup', () => {
    const { asFragment } = render(
      <Body>
        <div>Test</div>
      </Body>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
