## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|89,999,493|44999857|
|(short string) (true) String#slice and strict comparison|53,175,626|26587828|
|(long string) (true) String#startsWith|57,395,486|28697795|
|(long string) (true) String#slice and strict comparison|47,277,676|23638844|
|(short string) (false) String#startsWith|96,212,850|48107199|
|(short string) (false) String#slice and strict comparison|52,221,357|26115636|
|(long string) (false) String#startsWith|85,851,396|42925958|
|(long string) (false) String#slice and strict comparison|46,940,594|23475319|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:50:03 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v22.19.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#startsWith","samples":44999857,"opsSec":89999493.32124238},{"name":"(short string) (true) String#slice and strict comparison","samples":26587828,"opsSec":53175626.22164932},{"name":"(long string) (true) String#startsWith","samples":28697795,"opsSec":57395486.34375166},{"name":"(long string) (true) String#slice and strict comparison","samples":23638844,"opsSec":47277676.55880227},{"name":"(short string) (false) String#startsWith","samples":48107199,"opsSec":96212850.51251236},{"name":"(short string) (false) String#slice and strict comparison","samples":26115636,"opsSec":52221357.4619577},{"name":"(long string) (false) String#startsWith","samples":42925958,"opsSec":85851396.42734882},{"name":"(long string) (false) String#slice and strict comparison","samples":23475319,"opsSec":46940594.12107592}]}-->
