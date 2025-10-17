## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|83,015,172|41507594|
|(short string) (true) String#slice and strict comparison|64,776,618|32395836|
|(long string) (true) String#startsWith|65,506,881|32753554|
|(long string) (true) String#slice and strict comparison|59,135,717|29596858|
|(short string) (false) String#startsWith|100,348,023|50174018|
|(short string) (false) String#slice and strict comparison|63,775,932|31887971|
|(long string) (false) String#startsWith|92,647,507|46323904|
|(long string) (false) String#slice and strict comparison|58,624,930|29320594|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:26:01 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":41507594,"opsSec":83015172.5591779},{"name":"(short string) (true) String#slice and strict comparison","samples":32395836,"opsSec":64776618.43208933},{"name":"(long string) (true) String#startsWith","samples":32753554,"opsSec":65506881.73923047},{"name":"(long string) (true) String#slice and strict comparison","samples":29596858,"opsSec":59135717.22607331},{"name":"(short string) (false) String#startsWith","samples":50174018,"opsSec":100348023.15545304},{"name":"(short string) (false) String#slice and strict comparison","samples":31887971,"opsSec":63775932.17850644},{"name":"(long string) (false) String#startsWith","samples":46323904,"opsSec":92647507.26619142},{"name":"(long string) (false) String#slice and strict comparison","samples":29320594,"opsSec":58624930.72046191}]}-->
