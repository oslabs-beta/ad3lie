import { Menu } from '@headlessui/react'

function MyDropdown() {
  return (
    <Menu>
      <Menu.Button>More</Menu.Button>
      <Menu.Items>
        {/* Use the `active` render prop to conditionally style the active item. */}
        <Menu.Item>
          {({ active }) => (
            <a
              className={`${
                active ? 'bg-blue-500 text-white' : 'bg-white text-black'
              }`}
              href="/account-settings"
            >
              Account settings
            </a>
          )}
        </Menu.Item>
        {/* ... */}
      </Menu.Items>
    </Menu>
  )
}