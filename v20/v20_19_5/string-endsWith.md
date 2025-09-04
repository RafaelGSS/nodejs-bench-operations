## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|52,548,860|26275734|
|(short string) (true) String#slice and strict comparison|64,510,729|32256561|
|(long string) (true) String#endsWith|50,898,454|25449232|
|(long string) (true) String#slice and strict comparison|58,925,776|29470425|
|(short string) (false) String#endsWith|58,962,576|29481302|
|(short string) (false) String#slice and strict comparison|63,662,751|31831400|
|(long string) (false) String#endsWith|55,328,259|27664790|
|(long string) (false) String#slice and strict comparison|58,303,991|29157168|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Thu Sep 04 2025 19:39:38 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.19.5`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597843170166016},"benchmarks":[{"name":"(short string) (true) String#endsWith","samples":26275734,"opsSec":52548860.84081825},{"name":"(short string) (true) String#slice and strict comparison","samples":32256561,"opsSec":64510729.29705037},{"name":"(long string) (true) String#endsWith","samples":25449232,"opsSec":50898454.53288745},{"name":"(long string) (true) String#slice and strict comparison","samples":29470425,"opsSec":58925776.07936958},{"name":"(short string) (false) String#endsWith","samples":29481302,"opsSec":58962576.28758914},{"name":"(short string) (false) String#slice and strict comparison","samples":31831400,"opsSec":63662751.48898336},{"name":"(long string) (false) String#endsWith","samples":27664790,"opsSec":55328259.75706568},{"name":"(long string) (false) String#slice and strict comparison","samples":29157168,"opsSec":58303991.00626777}]}-->
