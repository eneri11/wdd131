Console.WriteLine("What is your Name?");
 var name = Console.ReadLine();
var currentDate = DateTime.Now;
Console.WriteLine($"{Environment.NewLine} Hello, {name}, on {currentDate:d}");
Console.Write($"{Environment.NewLine}Press any key to exit...");
Console.ReadKey(true);
    