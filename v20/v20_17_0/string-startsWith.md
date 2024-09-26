## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|15,972,663|7986332|
|(short string) (true) String#slice and strict comparison|13,891,493|6945747|
|(long string) (true) String#startsWith|15,291,957|7645979|
|(long string) (true) String#slice and strict comparison|13,556,044|6778023|
|(short string) (false) String#startsWith|16,447,381|8223691|
|(short string) (false) String#slice and strict comparison|14,105,236|7052619|
|(long string) (false) String#startsWith|16,954,499|8477250|
|(long string) (false) String#slice and strict comparison|13,569,198|6784600|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 26 2024 00:08:07 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":15972663.744463444,"samples":7986332},{"name":"(short string) (true) String#slice and strict comparison","opsSec":13891493.777733698,"samples":6945747},{"name":"(long string) (true) String#startsWith","opsSec":15291957.602771686,"samples":7645979},{"name":"(long string) (true) String#slice and strict comparison","opsSec":13556044.427024085,"samples":6778023},{"name":"(short string) (false) String#startsWith","opsSec":16447381.40866714,"samples":8223691},{"name":"(short string) (false) String#slice and strict comparison","opsSec":14105236.420074234,"samples":7052619},{"name":"(long string) (false) String#startsWith","opsSec":16954499.593173537,"samples":8477250},{"name":"(long string) (false) String#slice and strict comparison","opsSec":13569198.615861697,"samples":6784600}]}-->
