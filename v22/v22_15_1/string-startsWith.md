## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|87,335,437|44235780|
|(short string) (true) String#slice and strict comparison|60,998,578|30518691|
|(long string) (true) String#startsWith|65,500,928|32750480|
|(long string) (true) String#slice and strict comparison|55,543,887|27771950|
|(short string) (false) String#startsWith|95,995,152|47997582|
|(short string) (false) String#slice and strict comparison|61,600,960|30800486|
|(long string) (false) String#startsWith|88,982,946|44491476|
|(long string) (false) String#slice and strict comparison|55,089,400|27544845|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 17 2025 17:25:37 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.15.1`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.59783935546875},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44235780,"opsSec":87335437.22702345},{"name":"(short string) (true) String#slice and strict comparison","samples":30518691,"opsSec":60998578.60819849},{"name":"(long string) (true) String#startsWith","samples":32750480,"opsSec":65500928.4285525},{"name":"(long string) (true) String#slice and strict comparison","samples":27771950,"opsSec":55543887.11381818},{"name":"(short string) (false) String#startsWith","samples":47997582,"opsSec":95995152.48058172},{"name":"(short string) (false) String#slice and strict comparison","samples":30800486,"opsSec":61600960.172615655},{"name":"(long string) (false) String#startsWith","samples":44491476,"opsSec":88982946.6610232},{"name":"(long string) (false) String#slice and strict comparison","samples":27544845,"opsSec":55089400.33993301}]}-->
