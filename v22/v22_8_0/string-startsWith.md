## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|99,100,345|49669141|
|(short string) (true) String#slice and strict comparison|49,838,583|24919302|
|(long string) (true) String#startsWith|54,631,297|27590662|
|(long string) (true) String#slice and strict comparison|42,115,492|21057761|
|(short string) (false) String#startsWith|70,757,538|35460893|
|(short string) (false) String#slice and strict comparison|48,872,555|24528790|
|(long string) (false) String#startsWith|77,629,261|38814634|
|(long string) (false) String#slice and strict comparison|44,899,626|22453221|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 21:42:05 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.8.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597881317138672},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":99100345.8354622,"samples":49669141},{"name":"(short string) (true) String#slice and strict comparison","opsSec":49838583.96488925,"samples":24919302},{"name":"(long string) (true) String#startsWith","opsSec":54631297.300665446,"samples":27590662},{"name":"(long string) (true) String#slice and strict comparison","opsSec":42115492.51915524,"samples":21057761},{"name":"(short string) (false) String#startsWith","opsSec":70757538.22469993,"samples":35460893},{"name":"(short string) (false) String#slice and strict comparison","opsSec":48872555.54236461,"samples":24528790},{"name":"(long string) (false) String#startsWith","opsSec":77629261.63440055,"samples":38814634},{"name":"(long string) (false) String#slice and strict comparison","opsSec":44899626.68566538,"samples":22453221}]}-->
