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
        { content: "IFullStack", color: Colors.Amber },
        { content: ":", color: Colors.White },
        { content: "IBackend", color: Colors.Amber, complement: [
          { content: ",", color: Colors.White },
        ]},
        { content: "IFrontend", color: Colors.Amber, complement: [
          { content: ";", color: Colors.White },
        ]},
      ],
    },
    {
      words: [
        { content: "interface", color: Colors.Purple },
        { content: "ISystemEngineer", color: Colors.Amber },
      ],
    },
    { words: [{ content: "{", color: Colors.White }] },
    {
      words: [
        { content: "tab", color: "" },
        { content: "LinkedList", color: Colors.Purple },
        {
          content: "<",
          color: Colors.White,
          complement: [
            { content: "ISkill", color: Colors.Amber },
            { content: ">", color: Colors.White },
          ],
        },
        { content: "SoftSkills", color: Colors.StrongAmber },
        { content: " { get; set; }", color: Colors.White },
      ],
    },
    {
      words: [
        { content: "tab", color: "" },
        { content: "LinkedList", color: Colors.Purple },
        {
          content: "<",
          color: Colors.White,
          complement: [
            { content: "ISkill", color: Colors.Amber },
            { content: ">", color: Colors.White },
          ],
        },
        { content: "HardSkills", color: Colors.StrongAmber },
        { content: " { get; set; }", color: Colors.White },
      ],
    },
    { words: [{ content: "}", color: Colors.White }] },
    {
      words: [
        { content: "public record", color: Colors.Purple },
        { content: "Person", color: Colors.Amber },
        { content: "(", color: Colors.White },
        { content: "string", color: Colors.Purple },
        { content: "Name", color: Colors.StrongAmber },
        { content: ",", color: Colors.White },
        { content: "string", color: Colors.Purple },
        { content: "Email", color: Colors.StrongAmber },
        { content: ",", color: Colors.White },
        { content: "DateOnly", color: Colors.Purple },
        { content: "Birthdate", color: Colors.StrongAmber },
        { content: ");", color: Colors.White },
      ],
    },
    {
      words: [
        { content: "public class", color: Colors.Purple },
        { content: "JuanZuniga", color: Colors.Amber },
        { content: "(", color: Colors.White },
        { content: "Person", color: Colors.Purple },
        { content: "person", color: Colors.StrongAmber },
        { content: ")", color: Colors.White },
        { content: ":", color: Colors.White },
        { content: "IFullStack", color: Colors.Amber },
        { content: ",", color: Colors.White },
        { content: "ISystemEngineer", color: Colors.Amber },
      ],
    },
    { words: [{ content: "{", color: Colors.White }] },
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
            { content: "ITechnology", color: Colors.Amber },
            { content: ">", color: Colors.White },
          ],
        },
        { content: "BackendFrameworks", color: Colors.StrongAmber },
        { content: " { get; set; }", color: Colors.White },
      ],
    },
    {
      words: [
        { content: "tab", color: "" },
        { content: "public int", color: Colors.Purple },
        { content: "FrontendExperienceYears", color: Colors.StrongAmber },
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
            { content: "ITechnology", color: Colors.Amber },
            { content: ">", color: Colors.White },
          ],
        },
        { content: "FrontendFrameworks", color: Colors.StrongAmber },
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
            { content: "ISkill", color: Colors.Amber },
            { content: ">", color: Colors.White },
          ],
        },
        { content: "SoftSkills", color: Colors.StrongAmber },
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
            { content: "ISkill", color: Colors.Amber },
            { content: ">", color: Colors.White },
          ],
        },
        { content: "HardSkills", color: Colors.StrongAmber },
        { content: " { get; set; }", color: Colors.White },
      ],
    },
    { words: [{ content: "}", color: Colors.White }] },
  ],
};


export default code;