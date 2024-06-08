describe('Header', () => {
  test('should render Header', () => {
    const wrapper = render(<Header />);
    expect(wrapper).toBeInTheDocument();
  });
});
