## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|18,409,141|9204572|
|(short string) (true) String#slice and strict comparison|19,923,796|9961899|
|(long string) (true) String#startsWith|17,619,568|8809785|
|(long string) (true) String#slice and strict comparison|19,985,623|9992812|
|(short string) (false) String#startsWith|19,505,805|9752903|
|(short string) (false) String#slice and strict comparison|19,955,970|9977986|
|(long string) (false) String#startsWith|19,160,563|9580282|
|(long string) (false) String#slice and strict comparison|19,818,590|9909296|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 15.2GB Mem
* __Run:__ Fri May 10 2024 00:30:41 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":15.245216369628906},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":18409141.82766819,"samples":9204572},{"name":"(short string) (true) String#slice and strict comparison","opsSec":19923796.047510453,"samples":9961899},{"name":"(long string) (true) String#startsWith","opsSec":17619568.519984588,"samples":8809785},{"name":"(long string) (true) String#slice and strict comparison","opsSec":19985623.68001121,"samples":9992812},{"name":"(short string) (false) String#startsWith","opsSec":19505805.41469876,"samples":9752903},{"name":"(short string) (false) String#slice and strict comparison","opsSec":19955970.16396954,"samples":9977986},{"name":"(long string) (false) String#startsWith","opsSec":19160563.425086427,"samples":9580282},{"name":"(long string) (false) String#slice and strict comparison","opsSec":19818590.097525164,"samples":9909296}]}-->
