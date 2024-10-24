#![feature(arbitrary_self_types)]
#![feature(arbitrary_self_types_pointers)]

#[turbo_tasks::value(resolved)]
struct MyValue {
    value: i32,
}

fn expects_resolved<T: turbo_tasks::ResolvedValue>(_value: T) {}

fn main() {
    let v = MyValue { value: 0 };
    expects_resolved(v);
    let _ = v.value;
}
