## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|81,177,348|96|
|(short string) (true) String#slice and strict comparison|855,122,908|95|
|(long string) (true) String#endsWith|76,983,121|99|
|(long string) (true) String#slice and strict comparison|858,251,008|100|
|(short string) (false) String#endsWith|98,750,407|97|
|(short string) (false) String#slice and strict comparison|851,218,007|98|
|(long string) (false) String#endsWith|90,024,853|99|
|(long string) (false) String#slice and strict comparison|858,022,375|97|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":81177348.12553892,"samples":4},{"name":"(short string) (true) String#slice and strict comparison","opsSec":855122907.7698252,"samples":6},{"name":"(long string) (true) String#endsWith","opsSec":76983121.1744247,"samples":5},{"name":"(long string) (true) String#slice and strict comparison","opsSec":858251007.8730205,"samples":9},{"name":"(short string) (false) String#endsWith","opsSec":98750407.41628405,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":851218007.271222,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":90024853.2071861,"samples":5},{"name":"(long string) (false) String#slice and strict comparison","opsSec":858022374.9564378,"samples":7}]}-->
