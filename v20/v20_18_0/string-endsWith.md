## endsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#endsWith|58,271,105|29135610|
|(short string) (true) String#slice and strict comparison|61,066,079|30533043|
|(long string) (true) String#endsWith|49,939,022|24973598|
|(long string) (true) String#slice and strict comparison|55,815,457|27909560|
|(short string) (false) String#endsWith|56,610,848|28305802|
|(short string) (false) String#slice and strict comparison|60,245,761|30122886|
|(long string) (false) String#endsWith|53,708,325|26858667|
|(long string) (false) String#slice and strict comparison|55,342,813|27672756|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 19:47:20 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v20.18.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#endsWith","opsSec":58271105.08938076,"samples":29135610},{"name":"(short string) (true) String#slice and strict comparison","opsSec":61066079.52699556,"samples":30533043},{"name":"(long string) (true) String#endsWith","opsSec":49939022.97949918,"samples":24973598},{"name":"(long string) (true) String#slice and strict comparison","opsSec":55815457.72455686,"samples":27909560},{"name":"(short string) (false) String#endsWith","opsSec":56610848.4716163,"samples":28305802},{"name":"(short string) (false) String#slice and strict comparison","opsSec":60245761.035271496,"samples":30122886},{"name":"(long string) (false) String#endsWith","opsSec":53708325.28776619,"samples":26858667},{"name":"(long string) (false) String#slice and strict comparison","opsSec":55342813.373734266,"samples":27672756}]}-->
