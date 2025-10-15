## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|90,161,909|45081488|
|(short string) (true) String#slice and strict comparison|60,562,591|30281306|
|(long string) (true) String#startsWith|60,666,432|30344862|
|(long string) (true) String#slice and strict comparison|54,575,378|27288251|
|(short string) (false) String#startsWith|93,262,187|46633878|
|(short string) (false) String#slice and strict comparison|60,333,110|30176915|
|(long string) (false) String#startsWith|87,415,815|43707931|
|(long string) (false) String#slice and strict comparison|54,090,639|27051690|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:06:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":45081488,"opsSec":90161909.56493366},{"name":"(short string) (true) String#slice and strict comparison","samples":30281306,"opsSec":60562591.77209434},{"name":"(long string) (true) String#startsWith","samples":30344862,"opsSec":60666432.0940604},{"name":"(long string) (true) String#slice and strict comparison","samples":27288251,"opsSec":54575378.72955498},{"name":"(short string) (false) String#startsWith","samples":46633878,"opsSec":93262187.12828219},{"name":"(short string) (false) String#slice and strict comparison","samples":30176915,"opsSec":60333110.644474916},{"name":"(long string) (false) String#startsWith","samples":43707931,"opsSec":87415815.1451231},{"name":"(long string) (false) String#slice and strict comparison","samples":27051690,"opsSec":54090639.16630693}]}-->
