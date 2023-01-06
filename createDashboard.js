const testCases = [
    {
      feature: "Crop&Fit",
      featureId: 30145,
      title:
        "Validate correct scale, padding color & padding position is rendered in final video",
      id: "C303026",
      toDo: false,
      ready: false,
      automated: false,
    },
    {
      feature: "Crop&Fit",
      featureId: 30145,
      title:
        "Change Editing style - all the changes are present the same *Auto*",
      id: "C303027",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Crop&Fit",
      featureId: 30145,
      title:
        "Changing movie orientation: all the scene are reset to the default without cropped effect *Auto*",
      id: "C303028",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "E2E sanity",
      featureId: 30174,
      title: "Cross Editor translation is verifying only on Production",
      id: "C293808",
      toDo: false,
      ready: false,
      automated: false,
    },
    {
      feature: "E2E sanity",
      featureId: 30174,
      title: "Verify all changes are saved and present in video Result",
      id: "C293810",
      toDo: false,
      ready: false,
      automated: false,
    },
    {
      feature: "E2E sanity",
      featureId: 30174,
      title: "Verify all changes are saved and present in Editor *Auto*",
      id: "C293811",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "E2E sanity",
      featureId: 30174,
      title:
        "Verify scenes are playing in Editor after closing Preview modal *Auto*",
      id: "C321787",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "E2E sanity",
      featureId: 30174,
      title:
        "Verify edits a preset in blurred (dragonfly) preview after editing scenes *Auto*",
      id: "C321788",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Media inspector",
      featureId: 33714,
      title:
        "Given I am in media inspector, I can upload a new media to My Media library *Auto*",
      id: "C321794",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Media inspector",
      featureId: 33714,
      title:
        "Given I am in media inspector, I can remove media from My Media library *Auto*",
      id: "C321795",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Media inspector",
      featureId: 33714,
      title:
        "Given I am in media inspector, I can upload multiple files to My Media library *Auto*",
      id: "C321797",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Media inspector",
      featureId: 33714,
      title:
        "Given I am in media inspector, I can cancel media upload *Auto*",
      id: "C321798",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Media inspector",
      featureId: 33714,
      title:
        "Given I am in media inspector, I can preview image media in each tab (stock, my media, etc.) *Auto*",
      id: "C321799",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Media inspector",
      featureId: 33714,
      title:
        "Given I am in media inspector, I can preview video media in each tab *Auto*",
      id: "C321800",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Media inspector",
      featureId: 33714,
      title:
        "Given I am in media inspector, I can see Add or Replace icon when hovering over a media item *Auto*",
      id: "C321803",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Media inspector",
      featureId: 33714,
      title:
        "Given I am in media inspector, I can search for stock images and videos *Auto*",
      id: "C321804",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Media inspector",
      featureId: 33714,
      title:
        "Given I am in media inspector, I can filter my media by source, type, and ratio *Auto*",
      id: "C321805",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Media inspector",
      featureId: 33714,
      title:
        "Given I am in media inspector, I can add media(s) as new scene(s) *Auto*",
      id: "C322513",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Media inspector",
      featureId: 33714,
      title:
        "Given I am in the editor, I can undo and redo adding media as a new scene *Auto*",
      id: "C322514",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Scene background color",
      featureId: 34191,
      title:
        "Default scene bg color is primary color from current color palette *Auto*",
      id: "C324992",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Scene background color",
      featureId: 34191,
      title:
        "Media background color is always the same as scene background color *Auto*",
      id: "C325135",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Scene background color",
      featureId: 34191,
      title:
        "Given I am on a scene without media, I can change scene background color *Auto*",
      id: "C324993",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Scene background color",
      featureId: 34191,
      title:
        "Given I am on a scene with media element, I can change scene background color *Auto*",
      id: "C324994",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Scene background color",
      featureId: 34191,
      title:
        "Given I am on a scene with changed bg color, I can reset the color back to the default one *Auto*",
      id: "C324995",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Scene background color",
      featureId: 34191,
      title:
        "Given I am in Editor, I can change scene background color and apply changes to all scenes *Auto*",
      id: "C324996",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Scene background color",
      featureId: 34191,
      title:
        "Given I changed bg color of scene(s), I can undo and redo color changes *Auto*",
      id: "C324999",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Scene background color",
      featureId: 34191,
      title:
        "Given I am on a scene with media, I verify the changing scene bg color changes media bg color as well *Auto*",
      id: "C325000",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Scene background color",
      featureId: 34191,
      title:
        "Given I changed bg color of a scene, when I apply new color palette, I verify the bg color I selected remains unchanged *Auto*",
      id: "C325002",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Scene background color",
      featureId: 34191,
      title:
        "Given I changed bg color of a scene, when I apply new color palette and click on Apply to all scenes button, I verify that the new color palette is applied to the scene with changed bg color *Auto*",
      id: "C325136",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Color fills the padding",
      featureId: 31624,
      title: "Change the color from color picker of inspector *Auto*",
      id: "C303041",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "Header - Vimeo logo *Auto*",
      id: "C293792",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "Header - Video title is unable to be edit",
      id: "C293793",
      toDo: false,
      ready: false,
      automated: false,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "Header - Duration *Auto*",
      id: "C293802",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "Header - Save *Auto*",
      id: "C293804",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "Header - Undo/Redo *Auto*",
      id: "C293803",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "Header - Format (video orientation) dropdown *Auto*",
      id: "C293799",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "GB- Add text sticker *Auto*",
      id: "C293794",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "GB- Add image sticker from image stickers inspector *Auto*",
      id: "C293795",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "GB- Add image sticker from Desktop Upload *Auto*",
      id: "C293796",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "GB- Style inspector *Auto*",
      id: "C293797",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "GB- Music inspector *Auto*",
      id: "C293798",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "GB- Color Palette inspector *Auto*",
      id: "C293800",
      toDo: true,
      ready: true,
      automated: true,
    },
    {
      feature: "Global bar (GB) and Header",
      featureId: 30175,
      title: "GB- Brand dialog only for Business tier *Auto*",
      id: "C293801",
      toDo: true,
      ready: true,
      automated: true,
    },
];


function createCaption(object) {
  let tr = document.createElement("tr");

  for (const key in object) {
    // перебор всех свойств объекта
    if (Object.hasOwnProperty.call(object, key)) {
        switch (key) {
            case "feature": {
                tr.append(createCell("Feature"));
                break;
            }
            case "title": {
                tr.append(createCell("Scenario"));
                break;
            }
            case "toDo": {
                tr.append(createCell("Automation candidate"));
                break;
            }
            case "ready": {
                tr.append(createCell("Ready for automation"));
                break;
            }
            case "automated": {
                tr.append(createCell("Automated"));
                break
            }
            case "id": {
                tr.append(createCell("ID"));
                break;
            }
        }
    }
  }
  return tr;
}

function createRow(object) {
  const tr = document.createElement("tr");
  for (const key in object) {
    // перебор всех свойств объекта
    if (Object.hasOwnProperty.call(object, key)) {
      const item = object[key];

      if (key !== "featureId") {
        //   tr.append(createCell(item));
        if (typeof item === "boolean") {
          tr.append(createDiv(item));
        } else {
          if (key === "id") {
            tr.append(createHref(item));
          } else {
            tr.append(createCell(item));
          }
        }
      }
      // создание ячейки под каждое значение свойства
    }
  }
  return tr;
}

function createHref(text) {
  const tx = text.slice(1, 7);
  const td = document.createElement("td");
  const a = document.createElement("a");
  a.setAttribute(
    "href",
    "https://testrail.io/index.php?/cases/view/" + tx
  );
  a.setAttribute("target", "_blank");
  a.textContent = text;
  td.append(a);
  return td;
}

function createDiv(text) {
  const div = document.createElement("div");
  const td = document.createElement("td");
  const p = document.createElement("p");

  if (text === true) {
    div.classList.add("yes");
    p.textContent = "yes";
    div.append(p);
  }

  if (text === false) {
    div.classList.add("no");
    p.textContent = "no";
    div.append(p);
  }

  td.append(div);
  return td;
}

function createCell(text) {
  const td = document.createElement("td");

  td.textContent = text;
  return td;
}

const table = document.createElement("table");

table.append(createCaption(testCases[0])); // создание первой строки с названиями колонок

for (const item of testCases) {
  table.append(createRow(item));
}

const container = document.querySelector(".container");

container.append(table);

const elements = document.querySelectorAll("td:nth-child(3)");
const items = document.querySelectorAll("td:nth-child(6)");

for (let i = 0; i < elements.length; i++) {
  const cloneElement = elements[i].cloneNode(true);
  items[i].after(cloneElement);
  elements[i].remove();
}

const scenarios = document.querySelectorAll("td:nth-child(2)");

for (const e of scenarios) {
  e.setAttribute("class", "scenario");
}
