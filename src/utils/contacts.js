import localforage from "localforage";
import { matchSorter } from "match-sorter";
import sortBy from "sort-by";

// 연락처 조회하기
export async function getContacts(query) {
    await fakeNetwork(`getContacts:${query}`);
    let contacts = await get("contacts");
    if (!contacts) contacts = [];
    if (query) {
        contacts = matchSorter(contacts, query, { keys: ["first", "last"] });
    }
    return contacts.sort(sortBy("last", "createdAt"));
}

// 연락처 등록하기
export async function createContact() {
    await fakeNetwork();
    let id = Math.random().toString(36).substring(2, 9);
    let contact = { id, createdAt: Date.now() };
    let contacts = await getContacts();
    contacts.unshift(contact);
    await set("contacts", contacts);
    return contact;
}

// id로 연락처 조회하기
export async function getContact(id) {
    await fakeNetwork(`contact:${id}`);
    let contacts = await get("contacts");
    let contact = contacts.find(contact => contact.id === id);
    return contact ?? null;
}

// 연락처 업데이트
export async function updateContact(id, updates) {
    await fakeNetwork();
    let contacts = await get("contacts");
    let contact = contacts.find(contact => contact.id === id);
    if (!contact) throw new Error("No contact found for", id);
    Object.assign(contact, updates);
    await set("contacts", contacts);
    return contact;
}

// 연락처 삭제
export async function deleteContact(id) {
    let contacts = await get("contacts");
    let index = contacts.findIndex(contact => contact.id === id);
    if (index > -1) {
        contacts.splice(index, 1);
        await set("contacts", contacts);
        return true;
    }
    return false;
}

// localStorage 가져오기
export function set(key="contacts", item) {
    return localforage.setItem(key, item);
}

// localStorage 내보내기
export function get(key="contacts") {
    return localforage.getItem(key);
}

// fake a cache so we don't slow down stuff we've already seen
let fakeCache = {};

async function fakeNetwork(key) {
    if (!key) {
        fakeCache = {};
    }

    if (fakeCache[key]) {
        return;
    }

    fakeCache[key] = true;
    return new Promise(res => {
        setTimeout(res, Math.random() * 800);
    });
}