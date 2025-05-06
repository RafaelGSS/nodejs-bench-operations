## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|84,767,520|42383789|
|(short string) (true) String#slice and strict comparison|55,438,630|27719325|
|(long string) (true) String#endsWith|65,810,311|32905162|
|(long string) (true) String#slice and strict comparison|51,819,912|25929744|
|(short string) (false) String#endsWith|93,396,420|46698360|
|(short string) (false) String#slice and strict comparison|56,738,379|28369317|
|(long string) (false) String#endsWith|83,534,388|41770409|
|(long string) (false) String#slice and strict comparison|51,679,159|25841341|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue May 06 2025 20:10:57 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.10.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597835540771484},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":42383789,"opsSec":84767520.35808615},{"name":"(short string) (true) String#slice and strict comparison","samples":27719325,"opsSec":55438630.818233736},{"name":"(long string) (true) String#endsWith","samples":32905162,"opsSec":65810311.75928201},{"name":"(long string) (true) String#slice and strict comparison","samples":25929744,"opsSec":51819912.09673349},{"name":"(short string) (false) String#endsWith","samples":46698360,"opsSec":93396420.19749117},{"name":"(short string) (false) String#slice and strict comparison","samples":28369317,"opsSec":56738379.58510594},{"name":"(long string) (false) String#endsWith","samples":41770409,"opsSec":83534388.525184},{"name":"(long string) (false) String#slice and strict comparison","samples":25841341,"opsSec":51679159.651836455}]}-->
