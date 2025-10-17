## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|54,067,532|27034262|
|(short string) (true) String#slice and strict comparison|65,051,248|32525908|
|(long string) (true) String#endsWith|50,651,401|25364735|
|(long string) (true) String#slice and strict comparison|59,335,702|29670920|
|(short string) (false) String#endsWith|59,226,979|29613506|
|(short string) (false) String#slice and strict comparison|63,804,465|31904716|
|(long string) (false) String#endsWith|55,235,773|27617904|
|(long string) (false) String#slice and strict comparison|58,466,096|29233833|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:17:36 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":27034262,"opsSec":54067532.833988085},{"name":"(short string) (true) String#slice and strict comparison","samples":32525908,"opsSec":65051248.75311087},{"name":"(long string) (true) String#endsWith","samples":25364735,"opsSec":50651401.90596756},{"name":"(long string) (true) String#slice and strict comparison","samples":29670920,"opsSec":59335702.314952545},{"name":"(short string) (false) String#endsWith","samples":29613506,"opsSec":59226979.780523},{"name":"(short string) (false) String#slice and strict comparison","samples":31904716,"opsSec":63804465.97080455},{"name":"(long string) (false) String#endsWith","samples":27617904,"opsSec":55235773.42240583},{"name":"(long string) (false) String#slice and strict comparison","samples":29233833,"opsSec":58466096.18531742}]}-->
