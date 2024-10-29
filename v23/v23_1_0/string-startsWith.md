## startsWith comparison

|name|ops/sec|samples|
|-|-|-|
|(short string) (true) String#startsWith|115,289,375|57696226|
|(short string) (true) String#slice and strict comparison|56,530,690|28266733|
|(long string) (true) String#startsWith|65,941,221|32970642|
|(long string) (true) String#slice and strict comparison|50,282,649|25148062|
|(short string) (false) String#startsWith|92,242,100|46126021|
|(short string) (false) String#slice and strict comparison|55,603,586|27810173|
|(long string) (false) String#startsWith|84,215,723|42107877|
|(long string) (false) String#slice and strict comparison|50,218,159|25116309|


<details>
<summary>Environment</summary>

* __Machine:__ linux x64 | 4 vCPUs | 7.6GB Mem
* __Run:__ Tue Oct 29 2024 20:02:14 GMT+0000 (Coordinated Universal Time)
* __Node:__ `v23.1.0`
</details>

<!--
{"environment":{"platform":"linux","arch":"x64","cpus":4,"totalMemory":7.597877502441406},"benchmarks":[{"name":"(short string) (true) String#startsWith","opsSec":115289375.919408,"samples":57696226},{"name":"(short string) (true) String#slice and strict comparison","opsSec":56530690.23004833,"samples":28266733},{"name":"(long string) (true) String#startsWith","opsSec":65941221.487722024,"samples":32970642},{"name":"(long string) (true) String#slice and strict comparison","opsSec":50282649.75834426,"samples":25148062},{"name":"(short string) (false) String#startsWith","opsSec":92242100.51537487,"samples":46126021},{"name":"(short string) (false) String#slice and strict comparison","opsSec":55603586.07829145,"samples":27810173},{"name":"(long string) (false) String#startsWith","opsSec":84215723.68233947,"samples":42107877},{"name":"(long string) (false) String#slice and strict comparison","opsSec":50218159.990866,"samples":25116309}]}-->
