## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|82,591,519|95|
|(short string) (true) String#slice and strict comparison|858,335,388|94|
|(long string) (true) String#endsWith|77,153,203|98|
|(long string) (true) String#slice and strict comparison|856,262,635|98|
|(short string) (false) String#endsWith|97,367,662|97|
|(short string) (false) String#slice and strict comparison|859,674,198|97|
|(long string) (false) String#endsWith|90,364,740|96|
|(long string) (false) String#slice and strict comparison|860,259,553|100|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:53:44 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":82591519.10993764,"samples":5},{"name":"(short string) (true) String#slice and strict comparison","opsSec":858335388.3692089,"samples":7},{"name":"(long string) (true) String#endsWith","opsSec":77153203.34015231,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":856262634.5421895,"samples":8},{"name":"(short string) (false) String#endsWith","opsSec":97367661.80708347,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":859674198.001779,"samples":7},{"name":"(long string) (false) String#endsWith","opsSec":90364740.18351029,"samples":5},{"name":"(long string) (false) String#slice and strict comparison","opsSec":860259553.1568245,"samples":6}]}-->
