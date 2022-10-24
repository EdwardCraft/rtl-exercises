import { render, screen } from "@testing-library/react";

import Options from "../Options";

it("displays image for each scoop option from server", async () => {
  render(<Options optionType="scoops" />);

  //Find images
  const scoopImages = await screen.findAllByRole("img", { name: /scoop$/i });
  expect(scoopImages).toHaveLength(2);

  // confirm alt text of images
  const altText = scoopImages.map((scoopImage) => scoopImage.alt);
  expect(altText).toEqual(["Chocolate scoop", "Vanilla scoop"]);
});