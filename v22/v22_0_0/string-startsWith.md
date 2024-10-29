## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|122,285,521|61143196|
|(short string) (true) String#slice and strict comparison|59,735,399|29881822|
|(long string) (true) String#startsWith|61,718,097|30897334|
|(long string) (true) String#slice and strict comparison|53,518,182|26761633|
|(short string) (false) String#startsWith|94,917,446|47462970|
|(short string) (false) String#slice and strict comparison|59,461,579|29730816|
|(long string) (false) String#startsWith|86,435,926|43217984|
|(long string) (false) String#slice and strict comparison|53,046,068|26523072|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:00:43 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":122285521.32708815,"samples":61143196},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59735399.430558056,"samples":29881822},{"name":"(long string) (true) String#startsWith","opsSec":61718097.07255835,"samples":30897334},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53518182.30786257,"samples":26761633},{"name":"(short string) (false) String#startsWith","opsSec":94917446.40722568,"samples":47462970},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59461579.91165599,"samples":29730816},{"name":"(long string) (false) String#startsWith","opsSec":86435926.16501173,"samples":43217984},{"name":"(long string) (false) String#slice and strict comparison","opsSec":53046068.780674465,"samples":26523072}]}-->
