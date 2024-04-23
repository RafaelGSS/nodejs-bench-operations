## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|213,141,007|97|
|(short string) (true) String#slice and strict comparison|820,356,234|96|
|(long string) (true) String#startsWith|133,713,195|98|
|(long string) (true) String#slice and strict comparison|815,902,400|99|
|(short string) (false) String#startsWith|435,992,447|94|
|(short string) (false) String#slice and strict comparison|816,033,832|96|
|(long string) (false) String#startsWith|328,652,166|91|
|(long string) (false) String#slice and strict comparison|814,780,526|95|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.6GB Mem
* __Run:__ Tue Apr 23 2024 17:16:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.606494903564453},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":213141006.67555666,"samples":6},{"name":"(short string) (true) String#slice and strict comparison","opsSec":820356233.7414032,"samples":6},{"name":"(long string) (true) String#startsWith","opsSec":133713194.90699524,"samples":11},{"name":"(long string) (true) String#slice and strict comparison","opsSec":815902400.4761286,"samples":7},{"name":"(short string) (false) String#startsWith","opsSec":435992447.47492576,"samples":7},{"name":"(short string) (false) String#slice and strict comparison","opsSec":816033831.6421729,"samples":7},{"name":"(long string) (false) String#startsWith","opsSec":328652165.68709064,"samples":6},{"name":"(long string) (false) String#slice and strict comparison","opsSec":814780525.7527514,"samples":9}]}-->
