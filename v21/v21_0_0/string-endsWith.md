## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|14,206,436|7103219|
|(short string) (true) String#slice and strict comparison|12,527,511|6263756|
|(long string) (true) String#endsWith|13,996,071|6998036|
|(long string) (true) String#slice and strict comparison|12,347,029|6173515|
|(short string) (false) String#endsWith|15,677,327|7838664|
|(short string) (false) String#slice and strict comparison|12,557,963|6278982|
|(long string) (false) String#endsWith|15,487,726|7743864|
|(long string) (false) String#slice and strict comparison|12,416,502|6208253|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Wed Sep 25 2024 23:43:33 GMT+0000 (Coordinated Universal Time)
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597896575927734},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":14206436.123241074,"samples":7103219},{"name":"(short string) (true) String#slice and strict comparison","opsSec":12527511.680879992,"samples":6263756},{"name":"(long string) (true) String#endsWith","opsSec":13996071.611248411,"samples":6998036},{"name":"(long string) (true) String#slice and strict comparison","opsSec":12347029.598728543,"samples":6173515},{"name":"(short string) (false) String#endsWith","opsSec":15677327.547029462,"samples":7838664},{"name":"(short string) (false) String#slice and strict comparison","opsSec":12557963.974456994,"samples":6278982},{"name":"(long string) (false) String#endsWith","opsSec":15487726.591749255,"samples":7743864},{"name":"(long string) (false) String#slice and strict comparison","opsSec":12416502.324109139,"samples":6208253}]}-->
