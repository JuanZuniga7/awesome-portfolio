import type ICode from "./interface/ICode";

enum Colors {
  Purple = "text-purple-400",
  Amber = "text-amber-400",
  StrongAmber = "text-amber-500",
  White = "text-white",
}

const code: ICode = {
  title: "AlternativeNavigation",
  lines: [
    {
      words: [
        { content: "interface", color: Colors.Purple },
        { content: "IBackend", color: Colors.Amber },
      ],
      link: "/about/skills#backend"
    },
    { words: [{ content: "{", color: Colors.White }] },
    {
      words: [
        { content: "tab", color: "" },
        { content: "int", color: Colors.Purple },
        { content: "BackendExperienceYears", color: Colors.StrongAmber },
        { content: " { get; set; }", color: Colors.White },
      ],
    },
    {
      words: [
        { content: "tab", color: "" },
        {
          content: "LinkedList",
          color: Colors.Purple,
        },
        {
          content: "<",
          color: Colors.White,
          complement: [
            { content: "string", color: Colors.Amber },
            { content: ">", color: Colors.White },
          ],
        },
        { content: "BackendLanguages", color: Colors.StrongAmber },
        { content: " { get; set; }", color: Colors.White },
      ],
    },
    {
      words: [{ content: "}", color: Colors.White }],
    },
    {
      words: [
        { content: "public record", color: Colors.Purple },
        { content: "Person", color: Colors.Amber },
        { content: "(", color: Colors.White },
        { content: "string", color: Colors.Purple },
        { content: "Name", color: Colors.StrongAmber },
        { content: ",", color: Colors.White },
        { content: "DateOnly", color: Colors.Purple },
        { content: "Birthday", color: Colors.StrongAmber },
        { content: ",", color: Colors.White },
        { content: "string", color: Colors.Purple },
        { content: "Country", color: Colors.StrongAmber },
        { content: ");", color: Colors.White },
      ],
    },
    {
      words: [
        { content: "public class", color: Colors.Purple },
        { content: "SystemEngineer", color: Colors.Amber },
        { content: "(", color: Colors.White },
        { content: "Person", color: Colors.Purple },
        { content: "person", color: Colors.StrongAmber },
        { content: ")", color: Colors.White },
        { content: ":", color: Colors.White },
        { content: "IBackend", color: Colors.Amber },
      ],
    },
    {
      words: [{ content: "{", color: Colors.White }],
    },
    {
      words: [
        { content: "tab", color: "" },
        { content: "public int", color: Colors.Purple },
        { content: "BackendExperienceYears", color: Colors.StrongAmber },
        { content: " { get; set; }", color: Colors.White },
      ],
    },
    {
      words: [
        { content: "tab", color: "" },
        { content: "public LinkedList", color: Colors.Purple },
        {
          content: "<",
          color: Colors.White,
          complement: [
            { content: "string", color: Colors.Amber },
            { content: ">", color: Colors.White },
          ],
        },
        { content: "BackendLanguages", color: Colors.StrongAmber },
        { content: " { get; set; }", color: Colors.White },
      ],
    },
    {
      words: [{ content: "}", color: Colors.White }],
    },
  ],
};

export default code;
