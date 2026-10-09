/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import photo from './assets/foto-web.png';

export default function App() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-950">
      <img
        src={photo}
        alt="Foto de perfil"
        className="h-72 w-72 rounded-full object-cover border-4 border-white shadow-2xl"
      />
    </main>
  );
}
