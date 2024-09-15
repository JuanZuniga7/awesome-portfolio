---
content: "interface IBackend
{
    int BackendExperienceYears { get; set; }
    LinkedList<string> BackendLanguages { get; set; }
}"
---

public record Person (string Name, DateOnly Birthday, string Country);

public class SystemEngineer(Person person) : IBackend
{
    public int BackendExperienceYears { get; set; }
    public LinkedList<string> BackendLanguages { get; set; }
}