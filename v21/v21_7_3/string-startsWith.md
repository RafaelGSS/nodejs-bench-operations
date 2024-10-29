## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|106,238,828|53181782|
|(short string) (true) String#slice and strict comparison|59,554,357|29785901|
|(long string) (true) String#startsWith|64,145,400|32073264|
|(long string) (true) String#slice and strict comparison|53,724,477|26887018|
|(short string) (false) String#startsWith|99,102,557|49552007|
|(short string) (false) String#slice and strict comparison|59,809,998|29905149|
|(long string) (false) String#startsWith|82,695,957|41352782|
|(long string) (false) String#slice and strict comparison|53,790,207|26895110|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:59:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v21.7.3`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":106238828.35419638,"samples":53181782},{"name":"(short string) (true) String#slice and strict comparison","opsSec":59554357.218574814,"samples":29785901},{"name":"(long string) (true) String#startsWith","opsSec":64145400.32386231,"samples":32073264},{"name":"(long string) (true) String#slice and strict comparison","opsSec":53724477.85540228,"samples":26887018},{"name":"(short string) (false) String#startsWith","opsSec":99102557.78701587,"samples":49552007},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59809998.95000525,"samples":29905149},{"name":"(long string) (false) String#startsWith","opsSec":82695957.70676894,"samples":41352782},{"name":"(long string) (false) String#slice and strict comparison","opsSec":53790207.843413025,"samples":26895110}]}-->
