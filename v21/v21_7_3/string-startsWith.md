## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|14,543,157|7271579|
|(short string) (true) String#slice and strict comparison|15,248,827|7624414|
|(long string) (true) String#startsWith|14,089,452|7044727|
|(long string) (true) String#slice and strict comparison|15,231,700|7615851|
|(short string) (false) String#startsWith|15,096,166|7548084|
|(short string) (false) String#slice and strict comparison|15,211,600|7605801|
|(long string) (false) String#startsWith|14,719,958|7359980|
|(long string) (false) String#slice and strict comparison|15,291,896|7645949|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:34:01 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":14543157.563703472,"samples":7271579},{"name":"(short string) (true) String#slice and strict comparison","opsSec":15248827.420517124,"samples":7624414},{"name":"(long string) (true) String#startsWith","opsSec":14089452.985520342,"samples":7044727},{"name":"(long string) (true) String#slice and strict comparison","opsSec":15231700.29404561,"samples":7615851},{"name":"(short string) (false) String#startsWith","opsSec":15096166.460283315,"samples":7548084},{"name":"(short string) (false) String#slice and strict comparison","opsSec":15211600.478871202,"samples":7605801},{"name":"(long string) (false) String#startsWith","opsSec":14719958.67512391,"samples":7359980},{"name":"(long string) (false) String#slice and strict comparison","opsSec":15291896.1955286,"samples":7645949}]}-->
