/* eslint-disable array-callback-return */
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropDown from "../DropDown/DropDown";

describe("Testing the DropDown component", () => {
  test("render the single button used", async () => {
    render(<DropDown />);
    const buttonList = await screen.findAllByRole("button");
    expect(buttonList).toHaveLength(1);
  });
  test("doesn't shows pop up list when it never gets clicked", () => {
    const mockPopUpText = ["blogg", "academy"];
    render(<DropDown listvalues={mockPopUpText} />);
    expect(screen.queryByText(mockPopUpText)).toBeNull();
  });

  test("Should contain clickable elements", async () => {
    const listvalues = ["blog", "academy"];
    render(<DropDown listvalues={listvalues} />);
    userEvent.click(screen.getByRole("button"));
    listvalues.map((list) => {
      expect(screen.getByText(list)).toBeInTheDocument();
    });
  });
  test("Hover the options to change the color",()=>{
    const listvalues = ['blog'];
    render(<DropDown listvalues={listvalues}/>);
    userEvent.click(screen.getByRole("button"));
    userEvent.hover(screen.getByText(listvalues[0]));
    expect(screen.getByText(listvalues[0])).toHaveStyle({backgroundColor:'#ccc'})
  })
});


