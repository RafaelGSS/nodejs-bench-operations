## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|62,476,714|31269878|
|(short string) (true) String#slice and strict comparison|50,303,958|25155314|
|(long string) (true) String#endsWith|49,940,490|24983819|
|(long string) (true) String#slice and strict comparison|44,413,657|22308239|
|(short string) (false) String#endsWith|58,176,297|29089080|
|(short string) (false) String#slice and strict comparison|59,601,278|29801478|
|(long string) (false) String#endsWith|53,969,324|26984738|
|(long string) (false) String#slice and strict comparison|51,998,917|25999462|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Fri Oct 11 2024 19:01:34 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v18.20.4`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597888946533203},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":62476714.24635001,"samples":31269878},{"name":"(short string) (true) String#slice and strict comparison","opsSec":50303958.399371654,"samples":25155314},{"name":"(long string) (true) String#endsWith","opsSec":49940490.64892618,"samples":24983819},{"name":"(long string) (true) String#slice and strict comparison","opsSec":44413657.525615744,"samples":22308239},{"name":"(short string) (false) String#endsWith","opsSec":58176297.77670817,"samples":29089080},{"name":"(short string) (false) String#slice and strict comparison","opsSec":59601278.93921321,"samples":29801478},{"name":"(long string) (false) String#endsWith","opsSec":53969324.23826025,"samples":26984738},{"name":"(long string) (false) String#slice and strict comparison","opsSec":51998917.13614294,"samples":25999462}]}-->
