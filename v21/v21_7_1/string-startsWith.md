## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|269,036,186|95|
|(short string) (true) String#slice and strict comparison|822,632,436|98|
|(long string) (true) String#startsWith|173,531,063|92|
|(long string) (true) String#slice and strict comparison|821,493,251|97|
|(short string) (false) String#startsWith|784,542,324|96|
|(short string) (false) String#slice and strict comparison|822,953,554|99|
|(long string) (false) String#startsWith|784,282,036|98|
|(long string) (false) String#slice and strict comparison|822,884,106|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":269036186.46337646,"samples":8},{"name":"(short string) (true) String#slice and strict comparison","opsSec":822632436.1237578,"samples":7},{"name":"(long string) (true) String#startsWith","opsSec":173531063.2974542,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":821493251.1563164,"samples":7},{"name":"(short string) (false) String#startsWith","opsSec":784542324.2526858,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":822953554.0624561,"samples":9},{"name":"(long string) (false) String#startsWith","opsSec":784282036.287881,"samples":7},{"name":"(long string) (false) String#slice and strict comparison","opsSec":822884106.0906218,"samples":8}]}-->
