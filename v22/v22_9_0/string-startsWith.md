## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|123,392,118|61913525|
|(short string) (true) String#slice and strict comparison|57,416,476|28708261|
|(long string) (true) String#startsWith|64,346,430|32173222|
|(long string) (true) String#slice and strict comparison|53,404,159|26702095|
|(short string) (false) String#startsWith|93,196,403|46599257|
|(short string) (false) String#slice and strict comparison|58,719,408|29361388|
|(long string) (false) String#startsWith|88,559,096|44287741|
|(long string) (false) String#slice and strict comparison|52,459,588|26238342|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Oct 10 2024 17:50:05 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":123392118.2021139,"samples":61913525},{"name":"(short string) (true) String#slice and strict comparison","opsSec":57416476.985482045,"samples":28708261},{"name":"(long string) (true) String#startsWith","opsSec":64346430.229863934,"samples":32173222},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53404159.66643731,"samples":26702095},{"name":"(short string) (false) String#startsWith","opsSec":93196403.28785834,"samples":46599257},{"name":"(short string) (false) String#slice and strict comparison","opsSec":58719408.7942221,"samples":29361388},{"name":"(long string) (false) String#startsWith","opsSec":88559096.44173996,"samples":44287741},{"name":"(long string) (false) String#slice and strict comparison","opsSec":52459588.15465464,"samples":26238342}]}-->
