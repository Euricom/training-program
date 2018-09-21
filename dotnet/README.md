# Euricom .NET Training Program

## .NET Developer Roadmap

When you are new to .NET development, you should start here.

## Learn C#
C# is not the only language one can use for developing applications with the .NET framework, but it _is_ the most widespread one. <br>
Get used to the C# syntax without installing anything:

- [C# Quickstarts](https://docs.microsoft.com/en-us/dotnet/csharp/quick-starts/) - These quickstart excersises can be run in the browser!

    > Note: The last quickstart (Introduction to classes) requires a local development environment.<br>
    > But you should be able to complete the exercise with an online code editor like [.NET Fiddle](https://dotnetfiddle.net/).

- [.NET Academy](https://dotnetcademy.net/CSharp) - Interactive, browser based tutorials.
- [Tour of C#](https://docs.microsoft.com/en-us/dotnet/csharp/tour-of-csharp/index) - Excellent guide to the langue and its concepts.

### Set up your environment

Now that you have a basic understanding of the language, it's time to set up a local development environment, if you haven't already:

- [In 10 minutes](https://www.microsoft.com/net/learn/get-started-with-dotnet-tutorial) - Select your platform and get started!
- TODO: Create detailed machine setup for PRO DEVS

### Keep learning

- [C# programming guide](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/) - Detailed information on key C# language features and features accessible to C# through the .NET Framework.
- [C# reference](https://docs.microsoft.com/en-us/dotnet/csharp/language-reference/) - Complete C# language specification
- [C# Learning Path (Pluralsight)](https://app.pluralsight.com/paths/skills/csharp)
- [C# Fundamentals (Pluralsight)](https://app.pluralsight.com/library/courses/csharp-fundamentals-csharp5/table-of-contents)
- [C# 6 from scratch (Pluralsight)](https://app.pluralsight.com/library/courses/csharp-6-from-scratch)
- [C# Tutorials playlist (Programming with Mosh on YouTube)](https://www.youtube.com/watch?v=gfkTfcpWqAY&list=PLTjRvDozrdlz3_FPXwb6lX_HoGXa09Yef)
- [C# Tutorial playlist by Derek Banas (YouTube)](https://www.youtube.com/watch?v=0p0JLFZj2C8&list=PLGLfVvz_LVvRX6xK1oi0reKci6ignjdSa)
- Object Oriented Programming (OOP)
    - [Microsoft Docs](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/object-oriented-programming)
    - [OOP Fundamentals in C# (Pluralsight)](https://app.pluralsight.com/library/courses/object-oriented-programming-fundamentals-csharp)
    - [OOP Concepts](http://www.blackwasp.co.uk/CSharpObjectOriented.aspx)
    - [C# OOP in details](https://www.c-sharpcorner.com/UploadFile/asmabegam/basic-concept-of-oop-in-C-Sharp/)

### Self Test

You should only move on to the next step if you can respond with 'Yes I can!' to these statements:

- _I can create a Hello World console application with Visual Studio_
- _I can explain the difference between and can give examples of value and reference types_
- _I can explain the difference between the types `int` and `uint`_
- _I can explain why, in most cases, it's better to use a variable of type `double` than of type `decimal`_
- _I can give the reason for the compilation error on this statement `float unitPrice = 123.45;`_
- _I can write a few lines of code explaining the __remainder__ operator_
- _I can give examples of at least 4 different kinds of __iteration__ statements_
- _I can write a console application that prints out the Fibonacci sequence, using the `yield` statement_
- _I can catch an `Exception`_
- _I can declare single-, multi-dimensional and jagged arrays_
- _I can explain why `String` objects are immutable_
- _I can give examples of both `String.Format` and `String` interpolation_
- _I can explain the `var` keyword_
- _I can explain the difference between a `class` and a `struct`_
- _I can give examples of at least 6 types of `class` members_
- _I can explain the difference between a `class` and an instance_
- _I can declare a property in at least 2 different ways_
- _I can describe how and when to use these types of method parameters:_
    - _value_
    - _reference_
    - _output_
    - _parameter array_
- _I can describe the principle of __method overloading___
- _I can explain `delegate` and `event` types_
- _I can give use cases for an `interface`_
- _I can explay the difference between the acces modifiers:_
    - _`private`_
    - _`public`_
    - _`internal`_
    - _`protected`_
    - _`protected internal`_
- _I can also explain these modifiers:_
    - _`static`_
    - _`abstract`_
    - _`sealed`_
    - _`virtual`_
    - _`override`_
    - _`new`_
- _I can tell a story about the 4 pillars of OOP_
    - _Hint: Abstraction, Encapsulation, Inheritance and Polymorphism_
- _I can declare an extension method_


## Learn .NET

Now that you know the basics of one of the languages in the .NET framework, you should familiarize yourself with the .NET development platform.

- [What is .NET?](https://www.microsoft.com/net/learn/what-is-dotnet)
- [Why choose .NET?](https://www.microsoft.com/net/learn/why-choose-dotnet)
- [.NET architectural components](https://docs.microsoft.com/en-us/dotnet/standard/components)
- [.NET glossary](https://docs.microsoft.com/en-us/dotnet/standard/glossary)

Understand these topics:

- Common Language Runtime (CLR)
    - [CLR Overview](https://docs.microsoft.com/en-us/dotnet/standard/clr)
    - [An Introduction to C# and .NET (Pluralsight)](https://app.pluralsight.com/player?course=c-sharp-fundamentals-with-visual-studio-2015&author=scott-allen&name=c-sharp-fundamentals-with-visual-studio-2015-m1&clip=0&mode=live) - Part of [C# Fundamentals with VS2015](https://app.pluralsight.com/library/courses/c-sharp-fundamentals-with-visual-studio-2015)
- Managed code
    - [What is managed code](https://docs.microsoft.com/en-us/dotnet/standard/managed-code)
    - [Managed Execution Process](https://docs.microsoft.com/en-us/dotnet/standard/managed-execution-process)
    - [Automatic Memory Management](https://docs.microsoft.com/en-us/dotnet/standard/automatic-memory-management)
    - [Memory Management and Garbage Collection](https://docs.microsoft.com/en-us/dotnet/standard/garbage-collection/memory-management-and-gc)
- Common Type System (CTS)
    - [Common Type System & Common Language Specification](https://docs.microsoft.com/en-us/dotnet/standard/common-type-system)
    - [Common Type System](https://docs.microsoft.com/en-us/dotnet/standard/base-types/common-type-system)
    - [Language Independence](https://docs.microsoft.com/en-us/dotnet/standard/language-independence)
- Libraries
    - [Framework Libraries](https://docs.microsoft.com/en-us/dotnet/standard/framework-libraries)
    - [Class Library Overview](https://docs.microsoft.com/en-us/dotnet/standard/class-library-overview)
    - [.NET Class Libraries](https://docs.microsoft.com/en-us/dotnet/standard/class-libraries)
- Exceptions
    - [Handling and throwing exceptions in .NET](https://docs.microsoft.com/en-us/dotnet/standard/exceptions/)
    - [Exceptions and Exception Handling](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/exceptions/)

### .NET Framework / Core / Standard

Read up on the history of .NET! It is very important to understand the differences between these components and how/why they came to be..

- [The .NET Ecosystem: The Big Picture (Pluralsight)](https://app.pluralsight.com/library/courses/dotnet-ecosystem-big-picture)
- [.NET Framework](https://en.wikipedia.org/wiki/.NET_Framework)
    - [Version history](https://en.wikipedia.org/wiki/.NET_Framework_version_history)
    - [Versions and Dependencies](https://docs.microsoft.com/en-us/dotnet/framework/migration-guide/versions-and-dependencies)
- [.NET Core](https://en.wikipedia.org/wiki/.NET_Core)
    - [Version histrory](https://docs.microsoft.com/en-us/dotnet/core/versions/version-history)
    - [.NET Core and Open-Source](https://docs.microsoft.com/en-us/dotnet/framework/get-started/net-core-and-open-source)
- [Introducing .NET Standard](https://blogs.msdn.microsoft.com/dotnet/2016/09/26/introducing-net-standard/)
    - [A brief history](https://blog.xamarin.com/history-dot-net-standard/)
    - [.Net Standard 2.0 is out and it's impressive](http://www.talkingdotnet.com/whats-new-in-net-standard-2/) - plus [YouTube video](https://www.youtube.com/watch?v=YI4MurjfMn8)


## .NET Framework

- [.NET Framework Guide](https://docs.microsoft.com/en-us/dotnet/framework/)
- [Get started](https://docs.microsoft.com/en-us/dotnet/framework/get-started/)
    - [Overview](https://docs.microsoft.com/en-us/dotnet/framework/get-started/overview)

## C# "Advanced"

These are the C# language features every developer absolutely needs to __master__:

- Generics
    - [Generics in .NET](https://docs.microsoft.com/en-us/dotnet/standard/generics/index)
    - [Generics (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/generics/)
    - [C# Generics (Pluralsight)](https://app.pluralsight.com/library/courses/csharp-generics)
    - [C# Best Practices: Collections and Generics (Pluralsight)](https://app.pluralsight.com/library/courses/csharp-best-practices-collections-generics)
    - [C# Generics Tutorial: Whats and Whys (Programming with Mosh on YoutTube)](https://www.youtube.com/watch?v=gyal6TbgmSU)
- Lambda expressions, Action & Func types, LINQ
    - [Anonymous Functions (C# Programming Guide)](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/anonymous-functions)
        - [Lambda Expressions](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/statements-expressions-operators/lambda-expressions)
        - [Delegates with Named vs. Anonymous Methods](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/delegates/delegates-with-named-vs-anonymous-methods)
    - [C# Action](http://dotnetpattern.com/csharp-action-delegate)
    - [C# Func](http://dotnetpattern.com/csharp-func-delegates)
    - [C# Predicate](http://dotnetpattern.com/csharp-predicate-delegate)
    - [LINQ Fundamentals with C# 6.0 (Pluralsight)](https://app.pluralsight.com/library/courses/linq-fundamentals-csharp-6)
    - [LINQ Tutorials](http://dotnetpattern.com/LINQ-tutorials)
- Threading
    - [Threading C#](https://docs.microsoft.com/en-us/dotnet/csharp/programming-guide/concepts/threading/)
    - [Managed Threading](https://docs.microsoft.com/en-us/dotnet/standard/threading/)
- TPL
    - [Asynchronous Programming Patterns](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns)
    - [Task-based Asynchronous Pattern](https://docs.microsoft.com/en-us/dotnet/standard/asynchronous-programming-patterns/task-based-asynchronous-pattern-tap)
- Async/Await