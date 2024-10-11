## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|85,533,273|42938296|
|(short string) (true) String#slice and strict comparison|26,898,094|13456901|
|(long string) (true) String#startsWith|41,342,476|20728037|
|(long string) (true) String#slice and strict comparison|43,818,676|21913218|
|(short string) (false) String#startsWith|57,229,141|28657121|
|(short string) (false) String#slice and strict comparison|47,559,096|24176356|
|(long string) (false) String#startsWith|73,051,235|36526299|
|(long string) (false) String#slice and strict comparison|47,243,288|23667421|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:41:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":85533273.41516979,"samples":42938296},{"name":"(short string) (true) String#slice and strict comparison","opsSec":26898094.104800865,"samples":13456901},{"name":"(long string) (true) String#startsWith","opsSec":41342476.203232,"samples":20728037},{"name":"(long string) (true) String#slice and strict comparison","opsSec":43818676.501127824,"samples":21913218},{"name":"(short string) (false) String#startsWith","opsSec":57229141.92258626,"samples":28657121},{"name":"(short string) (false) String#slice and strict comparison","opsSec":47559096.96346208,"samples":24176356},{"name":"(long string) (false) String#startsWith","opsSec":73051235.74055591,"samples":36526299},{"name":"(long string) (false) String#slice and strict comparison","opsSec":47243288.192459494,"samples":23667421}]}-->
