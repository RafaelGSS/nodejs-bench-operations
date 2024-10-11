## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|108,793,108|54397226|
|(short string) (true) String#slice and strict comparison|61,035,223|30520773|
|(long string) (true) String#startsWith|58,874,222|29460708|
|(long string) (true) String#slice and strict comparison|55,868,540|27934318|
|(short string) (false) String#startsWith|96,130,607|48065310|
|(short string) (false) String#slice and strict comparison|60,247,883|30127214|
|(long string) (false) String#startsWith|89,227,075|44613543|
|(long string) (false) String#slice and strict comparison|55,586,914|27802466|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:04:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.17.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":108793108.4051112,"samples":54397226},{"name":"(short string) (true) String#slice and strict comparison","opsSec":61035223.60532761,"samples":30520773},{"name":"(long string) (true) String#startsWith","opsSec":58874222.65861374,"samples":29460708},{"name":"(long string) (true) String#slice and strict comparison","opsSec":55868540.24132203,"samples":27934318},{"name":"(short string) (false) String#startsWith","opsSec":96130607.31075983,"samples":48065310},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60247883.63388816,"samples":30127214},{"name":"(long string) (false) String#startsWith","opsSec":89227075.11429682,"samples":44613543},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55586914.94677979,"samples":27802466}]}-->
