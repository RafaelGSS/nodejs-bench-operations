## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|99,805,208|49903304|
|(short string) (true) String#slice and strict comparison|50,094,614|25055752|
|(long string) (true) String#startsWith|54,061,481|27030747|
|(long string) (true) String#slice and strict comparison|44,728,726|22364366|
|(short string) (false) String#startsWith|102,700,653|51360712|
|(short string) (false) String#slice and strict comparison|59,380,577|29690297|
|(long string) (false) String#startsWith|90,298,887|45149453|
|(long string) (false) String#slice and strict comparison|51,073,707|25544150|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:05:42 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":99805208.33175837,"samples":49903304},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50094614.09991008,"samples":25055752},{"name":"(long string) (true) String#startsWith","opsSec":54061481.34961336,"samples":27030747},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44728726.095808156,"samples":22364366},{"name":"(short string) (false) String#startsWith","opsSec":102700653.20369217,"samples":51360712},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59380577.967243955,"samples":29690297},{"name":"(long string) (false) String#startsWith","opsSec":90298887.57902694,"samples":45149453},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51073707.62884595,"samples":25544150}]}-->
