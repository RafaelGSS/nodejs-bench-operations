## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|81,719,306|95|
|(short string) (true) String#slice and strict comparison|821,984,134|96|
|(long string) (true) String#endsWith|76,784,525|95|
|(long string) (true) String#slice and strict comparison|823,335,410|98|
|(short string) (false) String#endsWith|98,235,072|99|
|(short string) (false) String#slice and strict comparison|822,875,654|95|
|(long string) (false) String#endsWith|89,943,062|99|
|(long string) (false) String#slice and strict comparison|822,258,553|99|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:00 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":81719305.71540216,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":821984134.2424747,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":76784524.71672489,"samples":7},{"name":"(long string) (true) String#slice and strict comparison","opsSec":823335410.4968786,"samples":8},{"name":"(short string) (false) String#endsWith","opsSec":98235072.2437452,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":822875654.3653206,"samples":6},{"name":"(long string) (false) String#endsWith","opsSec":89943062.23049812,"samples":9},{"name":"(long string) (false) String#slice and strict comparison","opsSec":822258552.9449673,"samples":6}]}-->
