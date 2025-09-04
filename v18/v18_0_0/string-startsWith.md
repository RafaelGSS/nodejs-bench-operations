## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|51,093,789|25590726|
|(short string) (true) String#slice and strict comparison|47,496,849|23751788|
|(long string) (true) String#startsWith|49,987,732|24993921|
|(long string) (true) String#slice and strict comparison|44,116,244|22058127|
|(short string) (false) String#startsWith|55,916,137|27958377|
|(short string) (false) String#slice and strict comparison|54,504,949|27255244|
|(long string) (false) String#startsWith|53,487,850|26744404|
|(long string) (false) String#slice and strict comparison|48,800,827|24402247|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:46:59 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.0.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":25590726,"opsSec":51093789.26170034},{"name":"(short string) (true) String#slice and strict comparison","samples":23751788,"opsSec":47496849.686134845},{"name":"(long string) (true) String#startsWith","samples":24993921,"opsSec":49987732.526865765},{"name":"(long string) (true) String#slice and strict comparison","samples":22058127,"opsSec":44116244.11796131},{"name":"(short string) (false) String#startsWith","samples":27958377,"opsSec":55916137.24500619},{"name":"(short string) (false) String#slice and strict comparison","samples":27255244,"opsSec":54504949.09806275},{"name":"(long string) (false) String#startsWith","samples":26744404,"opsSec":53487850.8883962},{"name":"(long string) (false) String#slice and strict comparison","samples":24402247,"opsSec":48800827.886605844}]}-->
