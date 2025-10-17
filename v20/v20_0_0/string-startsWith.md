## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|83,417,405|41709902|
|(short string) (true) String#slice and strict comparison|61,346,008|30676760|
|(long string) (true) String#startsWith|66,650,498|33325256|
|(long string) (true) String#slice and strict comparison|59,683,972|29841996|
|(short string) (false) String#startsWith|95,820,459|47919187|
|(short string) (false) String#slice and strict comparison|62,509,096|31266750|
|(long string) (false) String#startsWith|89,560,941|44791922|
|(long string) (false) String#slice and strict comparison|58,743,056|29376644|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:23:11 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":41709902,"opsSec":83417405.91641471},{"name":"(short string) (true) String#slice and strict comparison","samples":30676760,"opsSec":61346008.67200619},{"name":"(long string) (true) String#startsWith","samples":33325256,"opsSec":66650498.26999736},{"name":"(long string) (true) String#slice and strict comparison","samples":29841996,"opsSec":59683972.54302494},{"name":"(short string) (false) String#startsWith","samples":47919187,"opsSec":95820459.02369909},{"name":"(short string) (false) String#slice and strict comparison","samples":31266750,"opsSec":62509096.0738382},{"name":"(long string) (false) String#startsWith","samples":44791922,"opsSec":89560941.65512183},{"name":"(long string) (false) String#slice and strict comparison","samples":29376644,"opsSec":58743056.25194815}]}-->
