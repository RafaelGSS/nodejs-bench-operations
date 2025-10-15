## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|68,925,634|34462825|
|(short string) (true) String#slice and strict comparison|51,175,346|25598150|
|(long string) (true) String#startsWith|54,013,563|27009487|
|(long string) (true) String#slice and strict comparison|45,015,848|22515522|
|(short string) (false) String#startsWith|94,233,124|47116562|
|(short string) (false) String#slice and strict comparison|60,710,131|30367956|
|(long string) (false) String#startsWith|90,479,472|45247819|
|(long string) (false) String#slice and strict comparison|52,485,394|26244396|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Oct 15 2025 23:07:45 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.7`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":34462825,"opsSec":68925634.6985091},{"name":"(short string) (true) String#slice and strict comparison","samples":25598150,"opsSec":51175346.152167305},{"name":"(long string) (true) String#startsWith","samples":27009487,"opsSec":54013563.677380696},{"name":"(long string) (true) String#slice and strict comparison","samples":22515522,"opsSec":45015848.09019189},{"name":"(short string) (false) String#startsWith","samples":47116562,"opsSec":94233124},{"name":"(short string) (false) String#slice and strict comparison","samples":30367956,"opsSec":60710131.32131414},{"name":"(long string) (false) String#startsWith","samples":45247819,"opsSec":90479472.93736501},{"name":"(long string) (false) String#slice and strict comparison","samples":26244396,"opsSec":52485394.20055024}]}-->
