## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|70,811,928|35405973|
|(short string) (true) String#slice and strict comparison|50,895,419|25447717|
|(long string) (true) String#startsWith|55,473,518|27736770|
|(long string) (true) String#slice and strict comparison|44,924,520|22468265|
|(short string) (false) String#startsWith|102,391,435|51195748|
|(short string) (false) String#slice and strict comparison|60,988,856|30494453|
|(long string) (false) String#startsWith|88,901,242|44450647|
|(long string) (false) String#slice and strict comparison|52,882,880|26446769|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:05:56 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.8`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":35405973,"opsSec":70811928.72188939},{"name":"(short string) (true) String#slice and strict comparison","samples":25447717,"opsSec":50895419.44391005},{"name":"(long string) (true) String#startsWith","samples":27736770,"opsSec":55473518.92006282},{"name":"(long string) (true) String#slice and strict comparison","samples":22468265,"opsSec":44924520.23815569},{"name":"(short string) (false) String#startsWith","samples":51195748,"opsSec":102391435.9986185},{"name":"(short string) (false) String#slice and strict comparison","samples":30494453,"opsSec":60988856.233093314},{"name":"(long string) (false) String#startsWith","samples":44450647,"opsSec":88901242.61508176},{"name":"(long string) (false) String#slice and strict comparison","samples":26446769,"opsSec":52882880.51309019}]}-->
