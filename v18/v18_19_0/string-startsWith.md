## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|214,975,129|97|
|(short string) (true) String#slice and String#indexOf|820,833,072|97|
|(short string) (true) String#slice and strict comparison|821,493,755|95|
|(long string) (true) String#startsWith|133,475,429|97|
|(long string) (true) String#slice and strict comparison|819,470,049|95|
|(short string) (false) String#startsWith|439,083,924|98|
|(short string) (false) String#slice and strict comparison|821,549,922|97|
|(long string) (false) String#startsWith|330,454,487|96|
|(long string) (false) String#slice and strict comparison|454,160,868|58|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 13:54:04 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":214975128.98975956,"samples":6},{"name":"(short string) (true) String#slice and String#indexOf","opsSec":820833071.6695398,"samples":7},{"name":"(short string) (true) String#slice and strict comparison","opsSec":821493755.2231146,"samples":7},{"name":"(long string) (true) String#startsWith","opsSec":133475428.7395774,"samples":6},{"name":"(long string) (true) String#slice and strict comparison","opsSec":819470048.9293298,"samples":8},{"name":"(short string) (false) String#startsWith","opsSec":439083923.6446073,"samples":6},{"name":"(short string) (false) String#slice and strict comparison","opsSec":821549921.9110488,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":330454486.84421957,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":454160868.14167017,"samples":7}]}-->
